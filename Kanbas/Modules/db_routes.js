import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const findModulesByCourseId = async (req, res) => {
      const modules = await dao.findModulesByCourseId(req.params._id);
      res.json(modules);
  };
  const updateModule = async (req, res) => {
    const status = await dao.updateModule(req.params.mid, req.body);
    res.json(status);
  };
  const createModule = async (req, res) => {
    const newModule = { ...req.body, course: req.params._id };
    const module = await dao.createModule(newModule);
    res.json(module);
  };
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.mid);
    res.json(status);
  };
  app.get("/api/courses/:_id/modules", findModulesByCourseId);
  app.put("/api/modules/:mid", updateModule);
  app.post("/api/courses/:_id/modules", createModule);
  app.delete("/api/modules/:mid", deleteModule);
}