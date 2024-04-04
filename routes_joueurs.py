from flask import Blueprint, request, jsonify
from fonctions.joueurs import inserer_joueur, recherche_joueur, modifier_joueur, supprimer_joueur, dell
from bson import json_util

joueur_bp = Blueprint('joueur_bp', __name__)


@joueur_bp.route('/cree', methods=['POST'])
def creer_un_joueur():
    data = request.json  
    nom = data.get("nom")  
    prenom = data.get("prenom")
    age = data.get("age")
    niveau = data.get("niveau")
    email = data.get("email")
    tournois = data.get("Tournois")
    inserer_joueur(nom=nom, prenom=prenom, age=age, niveau=niveau, email=email, tournois=tournois)               
    return jsonify({"message": "Joueur créé avec succès"})


@joueur_bp.route('/rechercher/<string:_id>', methods=['GET'])
def rechercher_un_joueur(_id):
    joueur = recherche_joueur(_id)
    joueurjson = json_util.dumps(joueur)
    if joueurjson:
        return jsonify(joueurjson)
    else:
        return jsonify({"message": "Joueur non trouvé"})


@joueur_bp.route('/modifier/<string:_id>', methods=['PUT'])
def modifier_un_joueur(_id):
    data = request.get_json()
    modifier_joueur(_id, data)
    return jsonify({"message": "Joueur modifié avec succès"})


@joueur_bp.route('/supprimer/<string:_id>', methods=['DELETE'])
def supprimer_un_joueur(_id):
    supprimer_joueur(_id)
    joueur = recherche_joueur(_id)
    if joueur:
        return jsonify({"Pas supprime"})
    else:
        return jsonify({"message": "Joueur supprimé avec succès"})
    

@joueur_bp.route('/del', methods=['GET'])
def modifier_un_joueu():
    dell()
    return jsonify({"message": "Joueur modifié avec succès"})