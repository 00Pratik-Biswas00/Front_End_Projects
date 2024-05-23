import "./App.css";

export const contact = [
  {
    type: "text",
    name: "user_name",
    placeholder: "Your name",
  },
  {
    type: "email",
    name: "user_email",
    placeholder: "Your email",
  },
  {
    type: "text",
    name: "user_subject",
    placeholder: "Your subject",
  },
];

function App() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <form className="flex flex-col  border border-solid rounded-2xl gap-y-6  p-6 items-center max-[400px]:w-[19rem] max-[500px]:w-[23.5rem] max-[640px]:w-[30rem] sm:w-[35rem] md:w-[45rem] lg:w-[52rem] xl:w-[35rem] ">
        {contact.map((content, i) => (
          <input
            className="bg-transparent border-b py-3 outline-none w-full transition-all text-white"
            type={content.type}
            name={content.name}
            required
            placeholder={content.placeholder}
          />
        ))}

        <textarea
          className="bg-transparent border-b pt-3 pb-12 w-full outline-none  transition-all resize-none 
              
              
                "
          name="message"
          required
          placeholder="Your message"
        ></textarea>
        <button
          className="my-3 inline-flex px-3 items-center justify-center lg:text-[1.4rem] border bg-white text-black rounded-md cursor-pointer transition-transform hover:scale-110 duration-1000 transform-cpu
            
            
            border_color1
            black_white_color
            hover_effect_bgColor"
        >
          <span className="mr-[5px]">Send</span>
        </button>
      </form>
    </div>
  );
}

export default App;
