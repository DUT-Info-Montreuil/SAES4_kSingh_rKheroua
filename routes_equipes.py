from flask import Blueprint, request, jsonify
from fonctions.equipes import inserer_equipe, rechercher_equipe, modifier_equipe, supprimer_equipe

equipe_bp = Blueprint('equipe_bp', __name__)

@equipe_bp.route('/cree', methods=['POST'])
def creer_une_equipe():
    data = request.json  
    nomEquipes = data.get("nomEquipes")
    tournois = data.get("tournois")
    nom1 = data.get("nom1")
    prenom1 = data.get("prenom1")
    age1 = data.get("age1")
    niveau1 = data.get("niveau1")
    email1 = data.get("email1")
    nom2 = data.get("nom2")
    prenom2 = data.get("prenom2")
    age2 = data.get("age2")
    niveau2 = data.get("niveau2")
    email2 = data.get("email2")
    inserer_equipe(nomEquipes, tournois, nom1, prenom1, age1, niveau1, email1, nom2, prenom2, age2, niveau2, email2)
    return jsonify({"message": "Équipe créée avec succès"})

@equipe_bp.route('/equipes/<string:_id>', methods=['GET'])
def obtenir_une_equipe(_id):
    equipe = rechercher_equipe(_id)
    if equipe:
        return jsonify(equipe)
    else:
        return jsonify({"message": "Équipe non trouvée"})

@equipe_bp.route('/equipes/<string:_id>', methods=['PUT'])
def modifier_une_equipe(_id):
    data = request.get_json()
    modifier_equipe(_id, data)
    return jsonify({"message": "Équipe modifiée avec succès"})

@equipe_bp.route('/equipes/<string:_id>', methods=['DELETE'])
def supprimer_une_equipe(_id):
    supprimer_equipe(_id)
    return jsonify({"message": "Équipe supprimée avec succès"})
