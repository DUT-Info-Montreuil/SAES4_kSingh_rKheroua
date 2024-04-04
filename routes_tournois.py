from flask import Blueprint, jsonify, request
from fonctions.tournoi import inserer_tournoi,recherche_tournoi,modifier_tournoi,supprimer_tournoi,recherche_nom_tournoi, rechercher_tout_les_tournoi
from bson import json_util


tournoi_bp = Blueprint('tournoi_bp', __name__)


@tournoi_bp.route('/cree', methods=['POST'])
def creer_un_tournoi():
    data = request.json  
    nom = data.get("nom")  
    date = data.get("date")
    nb_tables = data.get("nbTables")
    duree = data.get("duree")
    format = data.get("format")
    lieu = data.get("lieu")
    description = data.get("description")
    pwd = data.get("pwd")
    salle = data.get("Salle")
    inserer_tournoi(nom=nom, date=date, nb_tables=nb_tables, duree=duree, format=format, lieu=lieu, description=description, pwd=pwd, salle=salle)               
    return jsonify({"message": "Tournoi créé avec succès"})


@tournoi_bp.route('/rechercher/<string:_id>', methods=['GET'])
def rechercher_un_tournoi(_id):
    tournoi = recherche_tournoi(_id)
    tournoijson = json_util.dumps(tournoi)
    if tournoijson:
        return jsonify(tournoijson)
    else:
        return jsonify({"message": "Tournoi non trouvé"})


@tournoi_bp.route('/modifier/<string:_id>', methods=['PUT'])
def modifier_un_tournoi(_id):
    data = request.get_json()
    modifier_tournoi(_id, data)
    return jsonify({"message": "Tournoi modifié avec succès"})


@tournoi_bp.route('/supprimer/<string:_id>/<string:pwd>', methods=['DELETE'])
def supprimer_un_tournoi(_id, pwd):
    supprimer_tournoi(_id, pwd)
    tournoi = recherche_tournoi(_id)
    if tournoi:
        return jsonify({"Pas supprime"})
    else:
        return jsonify({"message": "Tournoi supprimé avec succès"})


@tournoi_bp.route('/recherche_nom/<string:nom>', methods=['GET'])
def recherche_tournoi_par_nom(nom):
    id_tournoi = recherche_nom_tournoi(nom)
    if id_tournoi:
        return jsonify({"_id": id_tournoi})
    else:
        return jsonify({"message": "Aucun tournoi avec ce nom"})

@tournoi_bp.route('/recherche_tout/', methods=['GET'])
def recherche_tout_les_tournoi():
    t = rechercher_tout_les_tournoi()
    return jsonify(t)

