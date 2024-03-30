import connexion

equipes = connexion.equipes



def inserer_equipe(nom, joueur1, joueur2):
    equipes.insert_one ({
        "nom": nom,
        "membres": [joueur1,joueur2]
    })


def rechercher_equipe(_id):
    equipe = equipes.find_one({"_id": _id})
    return equipe


def modifier_equipe(_id, data):
    equipes.update_one({"_id": _id}, {"$set": data})


def supprimer_equipe(_id):
    equipes.delete_one({"_id": _id})