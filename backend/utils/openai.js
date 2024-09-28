import OpenAI from "openai";

const openai = new OpenAI({apiKey:""});

export async function createResponse(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}


// -> /goal/
// {user_id:"",date:""} 

// 2024-9-28


/* 

plans 
(user_id,data)

daily goal
{complete,fat,carbs,protein,date,user_id}


meals log
{breakfast,lunch,snacks,dinner,date,user_id}


i had 2 egg, 2 bread, milk ->breakfast protein,fat 
[
{
  name 
  description
  fat
  carbs
  protein
  kal
}
  
]


*/