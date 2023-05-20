import SideBottomNavControl from "./sideBottomNavControl";
import SideTopNavControl from "./sideTopNavControl";

function SideNavBarControl() {
  return (
    <main className="font-nohemi">
      <div className="w-24 bg-[#DCDCE5] left-0 fixed h-full py-20 pt-16 dark:bg-[#2F2F3A] flex flex-col justify-between items-center mt-4">
        <div className="flex flex-col justify-start">
          <SideTopNavControl />
        </div>
        <div className="flex flex-col mt-20">
          <SideBottomNavControl />
        </div>
      </div>
    </main>
  );
}

export default SideNavBarControl;
