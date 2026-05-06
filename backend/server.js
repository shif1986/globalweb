const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // Pour les variables d'environnement

const app = express();

// Configuration de base
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration du port
const DEFAULT_PORT = 5001; // Nouveau port par défaut
const PORT = process.env.PORT || DEFAULT_PORT;

// Routes de base
app.get("/", (req, res) => {
  res.send(`<h1>Serveur Express en cours d'exécution</h1>
            <p>Port utilisé : ${PORT}</p>
            <p>Environnement : ${process.env.NODE_ENV || "développement"}</p>`);
});

// Gestion des erreurs de port
const server = app
  .listen(PORT, () => {
    console.log(`\n🚀 Serveur démarré avec succès !`);
    console.log(`   - Local:   http://localhost:${PORT}`);
    console.log(
      `   - Network: http://${require("os").networkInterfaces().en0?.[0]?.address}:${PORT}`,
    );
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`\n❌ Erreur : Le port ${PORT} est déjà utilisé !`);
      console.log("   - Essayez avec un autre port (ex: 5002, 3000, 8080)");
      console.log(
        "   - Ou libérez le port avec : lsof -i :" +
          PORT +
          " puis kill -9 <PID>",
      );
      process.exit(1); // Quitte le processus avec erreur
    } else {
      console.error("❌ Erreur fatale:", err);
      process.exit(1);
    }
  });

// Middleware pour gérer les erreurs 404
app.use((req, res, next) => {
  res.status(404).send("Désolé, cette route n'existe pas !");
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Erreur serveur !");
});

module.exports = server; // Pour les tests
