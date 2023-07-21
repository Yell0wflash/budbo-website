const Title = () => {
  return (
    <div className="py-[180px] font-normal leading-normal font-sysui text-center">
        <p className="text-[120px]">
            <span className="italic">Together</span>
            <span>, we</span>
        </p>
        <p className="text-[140px] flex justify-center">
            <span>pioneer</span>&nbsp;
            <span id="owner" className="italic bg-linear bg-clip-text text-transparent w-max break-words
            grid">
                <span id="owner-the">the</span>
                <span id="owner-your">your</span>
            </span>
            &nbsp;<span>future</span>
        </p>
    </div>
  );
};

export default Title;
