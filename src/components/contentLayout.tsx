import React, { ReactNode } from "react";
import Subnav from "@/components/subnav";
import TagAside from "@/components/tagAside";

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={`p-10`}>
      <Subnav />
      <div className="grid grid-cols-4">
        <section className="col-span-3 border-r border-r-[#00000012] px-2">
          {children}
        </section>
        <aside className="col-auto p-4 space-y-3">
          <TagAside />
        </aside>
      </div>
    </main>
  );
};

export default ContentLayout;
