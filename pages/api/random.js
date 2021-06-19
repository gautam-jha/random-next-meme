function handler(req, res) {
    fetch(`https://meme-api.herokuapp.com/gimme/3`)
        .then(r => r.json())
        .then(data => {
            res.status(200).json(data);
        })
        .catch(() => res.status(500).json({ error: 'I am Error' }));
}

export default handler;
