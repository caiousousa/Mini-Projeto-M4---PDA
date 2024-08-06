import api from './ApiPlant';
import express from 'express';

const app = express();

app.get('/plants/:plantName', (req, res) => {
  const plantName = req.params.plantName;
  const plantInfo = api.getPlantInfo(plantName);
  res.json(plantInfo);
});

app.get('/plants', (req, res) => {
  const allPlants = api.getAllPlants();
  res.json(allPlants);
});

app.get('/care-tips', (req, res) => {
  const careTips = api.getPlantCareTips();
  res.json(careTips);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});