from flask import Flask, request, jsonify
from transformers import TFAutoModelForSequenceClassification, AutoTokenizer
from scipy.special import softmax
import re
import unicodedata
import pandas as pd
from tqdm.notebook import tqdm
import urllib.request
import tensorflow as tf

app = Flask(__name__)



def pretraiter_texte(texte):
    # Normaliser le texte
    texte = texte.lower()
    texte = unicodedata.normalize('NFKD', texte).encode('ASCII', 'ignore').decode('utf-8')

    # Supprimer les informations redondantes ou inutiles
    texte = re.sub(r'http\S+', '', texte)
    texte = re.sub(r'[^\w\s]', '', texte)

    return texte

def PFA_model(example):
    MODEL = "cardiffnlp/twitter-roberta-base-sentiment"
    tokenizer = AutoTokenizer.from_pretrained(MODEL)
    model = TFAutoModelForSequenceClassification.from_pretrained(MODEL)
    
    encoded_text = tokenizer(example, return_tensors='tf')
    output = model(**encoded_text)
    scores = tf.stop_gradient(output[0][0]).numpy()
    scores = softmax(scores)
    scores_dict = {
    'négatif': f"{scores[0]*100:.2f}%",
    'neutre': f"{scores[1]*100:.2f}%",
    'positif': f"{scores[2]*100:.2f}%"
}
    
    return scores_dict


@app.route('/nlp_test', methods=['POST'])
def nlp_test():
    # Get the input text from the request form
    text = request.form['comment']
    
    # Preprocess the input text
    preprocessed_text = pretraiter_texte(text)

    # Perform sentiment analysis and get the scores
    scores = PFA_model(preprocessed_text)

    # Create a DataFrame with the text and scores
    # df = {
    #     'Text': text,
    #     'Positive': scores['positif'],
    #     'Negative': scores['négatif'],
    #     'Neutral': scores['neutre']
    # }
    # print(df)
    # Return the DataFrame as a JSON response
    # return df.to_json(orient='records')
    # print(jsonify(df))
    return jsonify(scores)
if __name__ == '__main__':
    app.run(debug=True)