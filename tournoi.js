db = db.getSiblingDB("tournoi");

db.joueurs.drop()
db.matchs.drop()
db.equipes.drop()
db.tournois.drop()
db.scores.drop()
db.poules.drop()
db.classement.drop();


db.tournois.insertOne( 
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6e4"),
        "nom": "Tournoi de Volleyball",
        "date": "2024-07-15",
        "nbTables": 5,
        "duree": 3 ,
        "format": "solo",
        "lieu": "Centre sportif XYZ",
        "description": "Tournoi annuel de volleyball amateur.",
        "pwd": "motdepasse",
        "Joueurs": [ ObjectId("60a350bf8e3abf1050fdd6e1"), ObjectId("60a350bf8e3abf1050fdd6e2"), ObjectId("60a350bf8e3abf1050fdd6e3") ],
        "matches": [ ObjectId("60a350bf8e3abf1050fdd6e7"), ObjectId("60a350bf8e3abf1050fdd6e8") ],
        "poules": [ ObjectId("60a350bf8e3abf1050fdd6e5"), ObjectId("60a350bf8e3abf1050fdd6e6") ],
        "Salle": ObjectId("60a350bf8e3abf1050fdd6e9"),
    }
)
  
db.joueurs.insertMany([ 
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6e1"),
        "nom": "Doe",
        "prenom": "John",
        "âge": 30,
        "niveau": "debutant",
        "email": "john.doe@example.com",
        "Tournois": [ ObjectId("60a350bf8e3abf1050fdd6e4") ]
    },
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6e2"),
        "nom": "Smith",
        "prenom": "Alice",
        "âge": 25,
        "niveau": "pro",
        "email": "alice.smith@example.com",
        "Tournois": [ ObjectId("60a350bf8e3abf1050fdd6e4") ]
    },
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6e3"),
        "nom": "Brown",
        "prenom": "Bob",
        "âge": 35,
        "niveau": "avance",
        "email": "bob.brown@example.com",
        "Tournois": [ ObjectId("60a350bf8e3abf1050fdd6e4") ]
    }
])  
  
db.equipes.insertMany( [ 
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6ea"),
        "nom": "Équipe A",
        "membres": [ ObjectId("60a350bf8e3abf1050fdd6e1"), ObjectId("60a350bf8e3abf1050fdd6e2") ]
    },
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6eb"),
        "nom": "Équipe B",
        "membres": [ ObjectId("60a350bf8e3abf1050fdd6e3") ]
    }
])  
 
db.matchs.insertMany([ 
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6e7"),
        "arbitre": "Johnson",
        "participants": [ ObjectId("60a350bf8e3abf1050fdd6e1"), ObjectId("60a350bf8e3abf1050fdd6e2") ],
        "gagnant": ObjectId("60a350bf8e3abf1050fdd6e1"),
        "scores": [
        { "joueur": ObjectId("60a350bf8e3abf1050fdd6e1"), "score": 25 },
        { "joueur": ObjectId("60a350bf8e3abf1050fdd6e2"), "score": 20 }
        ]
    },
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6e8"),
        "arbitre": "Williams",
        "participants": [ ObjectId("60a350bf8e3abf1050fdd6e1"), ObjectId("60a350bf8e3abf1050fdd6e3") ],
        "gagnant": ObjectId("60a350bf8e3abf1050fdd6e3"),
        "scores": [
        { "joueur": ObjectId("60a350bf8e3abf1050fdd6e1"), "score": 15 },
        { "joueur": ObjectId("60a350bf8e3abf1050fdd6e3"), "score": 25 }
        ]
    }
])

db.scores.insertMany([ 
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6ec"),
        "match": ObjectId("60a350bf8e3abf1050fdd6e7"),
        "joueur1": ObjectId("60a350bf8e3abf1050fdd6e1"),
        "joueur2": ObjectId("60a350bf8e3abf1050fdd6e2")
    },
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6ed"),
        "match": ObjectId("60a350bf8e3abf1050fdd6e8"),
        "joueur1": ObjectId("60a350bf8e3abf1050fdd6e1"),
        "joueur2": ObjectId("60a350bf8e3abf1050fdd6e3")
     }
])

db.poules.insertMany([ 
    {
        "_id": ObjectId("60a350bf8e3abf1050fdd6e5"),
        "tournoi": ObjectId("60a350bf8e3abf1050fdd6e4"),
        "equipes": [ ObjectId("60a350bf8e3abf1050fdd6ea"), ObjectId("60a350bf8e3abf1050fdd6eb") ],
        "classement": [
        { "equipe": ObjectId("60a350bf8e3abf1050fdd6ea"), "points": 3, "setsGagnes": 6, "pointsMarques": 150 },
        { "equipe": ObjectId("60a350bf8e3abf1050fdd6eb"), "points": 0, "setsGagnes": 3, "pointsMarques": 100 }
        ],
        "matches":""
    }
])

db.classement.insertMany([
    {
        "equipe": ObjectId("60a350bf8e3abf1050fdd6ea"),
        "points": 15,
        "setsGagnes": 5,
        "pointsMarques": 500
    },
    {
        "equipe": ObjectId("60a350bf8e3abf1050fdd6eb"),
        "points": 10,
        "setsGagnes": 3,
        "pointsMarques": 450
    },
    {
        "equipe": ObjectId("60a350bf8e3abf1050fdd6ec"),
        "points": 8,
        "setsGagnes": 2,
        "pointsMarques": 400
    },
    {
        "equipe": ObjectId("60a350bf8e3abf1050fdd6ed"),
        "points": 5,
        "setsGagnes": 1,
        "pointsMarques": 350
    }
]);



db.tournois.insertOne ({
    "nom": "tournoi iut",
    "date": "03-04-2002",
    "nbTables": 3,
    "durée": 3,
    "format": "solo",
    "lieu": "france",
    "description": "dfsdsdf",
    "pwd": "ggg",
    "Joueurs": [],
    "matches": [],
    "poules": [],
    "Salle": "dsgsdg"
})