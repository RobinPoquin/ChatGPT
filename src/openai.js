import OpenAI from 'openai';

const apiKey = "sk-None-suPh892pOSbYmDVIdfV8T3BlbkFJdhR60urV5Cw4RIrRxQMT";

const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true // Permet l'utilisation dans le navigateur
});

export async function sendMessageToOpenAI(message) {
    try {
        const response = await openai.completions.create({
            model: 'gpt-3.5-turbo',
            prompt: message,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });
        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error communicating with OpenAI:', error);
    }
}


