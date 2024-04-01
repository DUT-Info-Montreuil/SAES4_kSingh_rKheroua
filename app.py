
from flask import Flask 

from routes_tournois import tournoi_bp
from routes_joueurs import joueur_bp
from routes_equipes import equipe_bp
from routes_matchs import match_bp



app = Flask(__name__)

app.register_blueprint(tournoi_bp, url_prefix='/tournois')
app.register_blueprint(joueur_bp, url_prefix='/joueurs')
app.register_blueprint(equipe_bp, url_prefix='/equipes')
app.register_blueprint(match_bp, url_prefix='/matchs')


if __name__ == '__main__':
    app.run(debug=True)