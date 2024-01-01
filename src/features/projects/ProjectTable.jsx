import useOwnerProjects from "./useOwnerProjects";
import Loading from "./../../ui/Loading";
import Empty from "../../ui/Empty";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();
  console.log(projects);

  if (isLoading) return <Loading />;
  if (!projects.length) return <Empty resourceName="پروژه" />;

  return (
    <div className="overflow-x-auto overflow-y-auto w-full h-auto">
      <table>
        <thead>
          <tr className="bg-gray-200 w-full">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>دد لاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody className="">
          {projects.map((project, index) => (
            <tr key={project._id}>
              <td>{index + 1}</td>
              <td>{project.title}</td>
              <td>{project.category?.title || "-"}</td>
              <td>{project.budget}</td>
              <td>{project.deadline}</td>
              <td className="">
                <div className=" flex flex-col gap-y-1">
                  {project.tags.map((tag) => (
                    <span className="bg-gray-400 px-2  rounded-lg" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status === "OPEN" ? (
                  <span className="bg-green-500 px-4 text-white rounded-lg py-0.5">باز</span>
                ) : (
                  <span className="bg-red-500 px-4 text-white rounded-lg py-0.5">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
