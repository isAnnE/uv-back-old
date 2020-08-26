const router = new require("express").Router();
const ContactModel = require("./models/Contact");

// GET
router.get("/", async (req, res, next) => {
    try {
        const contact = await ContactModel.find();
        res.json(contact);
    } catch (err) {
        next(err);
    }
});

// GET by ID
router.get("/:id", async (req, res, next) => {
    try {
        const contactID = await ContactModel.findById(req.params.id);
        res.json(contactID);
    } catch (err) {
        next(err);
    }
});

// POST

router.post("/", async (req, res, next) => {
    try {
        const newContact = await ContactModel.create(req.body);
        res.json(newContact);
    } catch (err) {
        next(err);
    }
});

// PATCH - UPDATE by id: 
router.patch("/:id", async (req, res, next) => {
    try {
        const updatedContact = await ContactModel.findByIdAndUpdate(
            req.params.id, // req.params.id = l'id passé en URL
            req.body, // données de mise à jour
            {
                new: true
            } // permet de récupérer le document mis à jour, sinon, l'ancienne version est retournée par défaut
        );
        res.json(updatedContact);
    } catch (err) {
        next(err);
    }
});


// DELETE by id:
router.delete("/:id", async (req, res, next) => {
    try {
        const deletedContact = await ContactModel.findByIdAndDelete(req.params.id); // req.params.id = l'id passé en URL
        res.json(deletedContact);
    } catch (err) {
        next(err);
    }
});

module.exports = router;