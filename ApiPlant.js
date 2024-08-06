import plantData from './PlantData';

const api = {
  getPlantInfo: (plantName) => {
    if (plantData[plantName]) {
      return plantData[plantName];
    } else {
      return { error: `Planta não encontrada: ${plantName}` };
    }
  },

  getAllPlants: () => {
    return Object.keys(plantData);
  },

  getPlantCareTips: () => {
    const careTips = [];
    for (const plant in plantData) {
      careTips.push({ plant, care: plantData[plant].care });
    }
    return careTips;
  }
};

export default api;