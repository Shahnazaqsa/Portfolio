from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from openai import OpenAI
import os, json

@csrf_exempt
def chat(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        user_message = data.get("message", "")

        if not user_message:
            return JsonResponse({"error": "Empty message"})

        try:
            client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

            response = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "You are Aqsa's portfolio assistant. Help users learn about her skills and projects."},
                    {"role": "user", "content": user_message},
                ],
                max_tokens=200,
            )

            bot_reply = response.choices[0].message.content.strip()
            return JsonResponse({"reply": bot_reply})

        except Exception as e:
            print("ERROR:", e)
            return JsonResponse({"error": "Server error: " + str(e)})

    return JsonResponse({"error": "Invalid request"})
