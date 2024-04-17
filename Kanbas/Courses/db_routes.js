import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses(req.body);
    res.json(courses);
  };
  const findCourseById = async (req, res) => {
    const course = await dao.findCourseById(req.params.id);
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }
    res.json(course);
  };
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.id);
    res.json(status);
  };
  const updateCourse = async (req, res) => {
    const status = await dao.updateCourse(req.params.id, req.body);
    res.json(status);
  };
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:id", findCourseById);
  app.post("/api/courses", createCourse);
  app.delete("/api/courses/:id", deleteCourse);
  app.put("/api/courses/:id", updateCourse);
}
