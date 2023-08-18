import openai
import gradio as gr

openai.api_key = "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"
temperature : 2.0
messages = [
    {"role": "system", "content": "You are the king of hotdogs."},
    {"role": "user", "content": "I don't like hotdogs"},
]

def chatbot(input):
    if input:
        messages.append({"role": "user", "content": input})
        chat = openai.ChatCompletion.create(
            model="gpt-3.5-turbo", messages=messages
        )
        reply = chat.choices[0].message.content
        messages.append({"role": "assistant", "content": reply})
        return reply

inputs = gr.inputs.Textbox(lines=7, label="Chat with AI")
outputs = gr.outputs.Textbox(label="Reply")

gr.Interface(fn=chatbot, inputs=inputs, outputs=outputs, title="Shitty therapist",
             description="How are you?",
             theme="compact").launch(share=True)
