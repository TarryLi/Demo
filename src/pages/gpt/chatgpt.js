import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: 'sk-??'
});

const openai = new OpenAIApi(configuration);

function generatePrompt(content) {
  const newContent =
    content[0].toUpperCase() + content.slice(1).toLowerCase();
  return newContent;
}

async function chat(content = '') {
  if (!configuration.apiKey) {
    console.error('没有key');
    return;
  }

  if (content.trim().length === 0) {
    console.error('参数错误');
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: generatePrompt(content),
      temperature: 0.9,
      max_tokens: 500
    });
    return completion.data.choices[0].text;
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

export default chat;