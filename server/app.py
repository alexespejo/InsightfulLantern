from flask import Flask, request, jsonify
from flask_cors import CORS
from google.cloud import language_v2
import firebase_admin
from firebase_admin import credentials, firestore
app = Flask(__name__)
CORS(app)


def analyzeSentiment(text_content: str) -> None:
    client = language_v2.LanguageServiceClient()

    document_type_in_plain_text = language_v2.Document.Type.PLAIN_TEXT

    language_code = "en"
    document = {
        "content": text_content,
        "type_": document_type_in_plain_text,
        "language_code": language_code,
    }

    encoding_type = language_v2.EncodingType.UTF8

    response = client.analyze_sentiment(
        request={"document": document, "encoding_type": encoding_type}
    )
    print(f"Document sentiment score: {response.document_sentiment.score}")
    print(f"Document sentiment magnitude: {response.document_sentiment.magnitude}")
    for sentence in response.sentences:
        print(f"Sentence text: {sentence.text.content}")
        print(f"Sentence sentiment score: {sentence.sentiment.score}")
        print(f"Sentence sentiment magnitude: {sentence.sentiment.magnitude}")

    print(f"Language of the text: {response.language_code}")
    return response.document_sentiment.score

@app.route("/create", methods = ["POST"])
def create_post():
    if not firebase_admin._apps:
        cred = firebase_admin.credentials.Certificate("./uci-hack-2024-firebase-adminsdk-81ie2-28d5c8fd40.json")
        app = firebase_admin.initialize_app(cred)
    else:
        app = firebase_admin.get_app()
    db = firestore.client()

    general_collection = db.collection('General')

    general_title = request.form.get("title", 'Not found')
    general_content = request.form.get("content", 'Not found')

    general_collection.add({
        'title': general_title,
        'content': general_content
    })

    return general_title

@app.route("/")
def hello_world():
    return {"hello" : "test"}

@app.route('/api/post_example', methods=['POST'])
def post_example():
    try:
        # Get the JSON data from the request body
        data = request.json

        # Process the data (you can perform any operations here)
        result = {"message": "Received data successfully", "data": data}

        # Return a JSON response
        return jsonify(result), 200
    except Exception as e:
        # Handle any exceptions that might occur
        return jsonify({"error": str(e)}), 500