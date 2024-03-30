
from flask import Flask 

from routes_tournois import tournois_bp



app = Flask(__name__)

app.register_blueprint(tournois_bp, url_prefix='/tournois')


if __name__ == '__main__':
    app.run(debug=True)