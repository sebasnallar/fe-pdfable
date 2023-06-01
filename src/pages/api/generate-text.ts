import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {

    const prompt = req.body.prompt;

    const configuration = new Configuration({
      apiKey: process.env.GPT_API_KEY,
    });
  
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { 
            role: "system",
            content: "You are a helpful assistant. Please generate a complete and well-structured HTML document suitable for academic essays. The HTML document should include a DOCTYPE declaration, <html>, <head>, and <body> tags. Within the body, please use appropriate HTML elements such as headings, subheadings, paragraphs, and tables for structuring the content. Additionally, please include CSS within the <style> tag in the <head> section to give the document a modern and clean appearance. Your use of CSS should enhance readability and should be responsive for viewing on different devices. Please remember to close all tags properly and ensure the HTML and CSS code is valid and error-free." 
          },
          { 
            role: "user",
            content: `Your answer MUST be html code DO NOT include anything else. Please use the following idea for the essay: ${prompt}`
          },
        ],
      });

      if (response.data && response.data.choices && response.data.choices[0] && response.data.choices[0].message && response.data.choices[0].message.content) {
        const sanitizedContent = response.data.choices[0].message.content.match(/<body>([\s\S]*?)<\/body>/);
        res.status(200).json({ text: sanitizedContent && sanitizedContent[1] ? sanitizedContent[1] : '' });
      } else {
        res.status(500).json({ error: 'Response from OpenAI was not as expected.' });
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Error generating text' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
