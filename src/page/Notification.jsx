const Notification = () => {
  return (
    <div className=" border w-full flex mx-auto">
      {/* Sticky Sidebar Section */}
      <main className="flex w-full ">
        <section className=" bg-green-600  w-[60%]">
          <h3>Notification</h3>
        </section>
        {/* <Outlet /> */}

        <aside className=" bg-blue-700 w-[40%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          quaerat necessitatibus ducimus officia consequuntur voluptate dolorum
          harum nulla doloribus unde, quasi magnam maiores facere nesciunt vitae
          facilis, distinctio cupiditate repudiandae!
        </aside>
      </main>
    </div>
  );
};

export default Notification;
