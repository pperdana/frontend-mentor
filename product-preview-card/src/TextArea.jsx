const TextArea = () => {
  return (
    <div className="textArea flex flex-col	gap-[20px] p-[25px]">
      <p
        id="p1"
        className="tracking-[5px] text-[13px] text-[hsl(228,12%,48%)] leading-[20px]	font-montserrat font-medium"
      >
        PERFUME
      </p>
      <h1 className="text-[hsl(212,21%,14%)] leading-[32px] font-fraunces font-bold text-[32px] sm:text-[28px]">
        Gabrielle Essence Eau De Parfum
      </h1>
      <p className="text-[13px] text-[hsl(228,12%,48%)] leading-[20px] font-montserrat font-medium">
        A floral, solar and voluptuous interpretation comprosed by Oliver Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="prices flex items-center gap-[15px]">
        <h2 className="text-[hsl(158,36%,37%)] leading-[32px] font-fraunces font-bold text-[32px] sm:text-[28px]">
          $149.99
        </h2>
        <p
          id="price"
          className="text-[12px] line-through text-[hsl(228,12%,48%)] leading-[20px] font-montserrat font-medium"
        >
          $169.99
        </p>
      </div>
      <button
        id="btn"
        className="flex justify-center	items-center gap-[10px] w-full h-[40px] rounded-[8px] bg-[hsl(158,36%,37%)] text-white font-montserrat font-bold text-[14px]"
      >
        <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
            fill="#FFF"
          ></path>
        </svg>
        Add to cart
      </button>
    </div>
  );
};

export default TextArea;
