from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/recipes', methods=['GET'])
def get_recipes():
    # Fetch recipes from database
    return jsonify({"recipes": []})
