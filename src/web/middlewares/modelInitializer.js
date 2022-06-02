import {db} from '../../util/index.js';
import model from '../../model/index.js';

export default (app) => {
  // To not even initialize db where its not needed, models are lazy, populated by getModels
  app.use(async (req, res, next) => {
    res.locals.getModels = async () => {
      res.locals.getModels = async () => ({
        discount: model.discountRepository(db),
        // TODO: whole sports app repo logic with firebase
        // sportsApp: model.sportsAppRepository(db),
      });
      return res.locals.getModels();
    };

    next();
  });
};
