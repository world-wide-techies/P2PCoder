import EditorNavBar from "@/components/navbar_components/editorNavbar_comp";
import SideNavBarControl from "@/components/navbar_components/sidebar_components/sideBarNavControl";

function TestPage() {
  return (
    <>
      <main className="h-full">
        <div className="relative h-full">
          <EditorNavBar />
        </div>
        <div className="relative mt-12">
          <SideNavBarControl />
        </div>
      </main>
    </>
  );
}

export default TestPage;
