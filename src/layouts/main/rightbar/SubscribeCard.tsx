const SubscribeCard = () => {
  return (
    <div className="border mb-0.5 border-[#333639] px-5 pt-3 pb-4 flex flex-col gap-2.5 rounded-2xl leading-5">
      <span className="text-xl font-bold">Subscribe to Premium</span>
      <span className="text-[15px] font-normal">
        Get rid of ads, see your analytics, boost your replies and unlock 20+
        features.
      </span>
      <button className="border mt-2 border-[#1d9bf0] text-[15px] font-bold bg-[#1d9bf0] rounded-full w-fit h-9 px-4.5 cursor-pointer hover:opacity-90 transition-all duration-300">
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeCard;
