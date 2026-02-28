import { motion } from 'framer-motion';

const WhyWeBuilt = () => {
    return (
        <section className="pt-24 max-w-[1411px] mx-auto px-6 lg:px-20 bg-background text-primary overflow-clip">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start w-full mb-12 will-change-transform"
            >
                {/* Left Side: Heading */}
                <div className="flex flex-col items-start gap-8 lg:sticky lg:top-32">
                    <div className="bg-[rgba(46,255,161,0.11)] px-[16px] py-[8px] rounded-[100px] inline-flex items-center justify-center font-inter font-semibold text-[14px] text-primary tracking-wide">
                        WHY WE BUILT AFTER5
                    </div>

                    <h2 className="font-cabinet font-bold text-[42px] md:text-[54px] lg:text-[64px] leading-[1.05] tracking-[-1.5px]">
                        We realised most businesses don’t have a lead problem.<br className="hidden lg:block" />
                        They have a <span className="text-accent-green">conversion and qualification</span> problem.
                    </h2>
                </div>

                {/* Right Side: Text Boxes */}
                <div className="flex flex-col gap-8 w-full mt-4 lg:mt-0">
                    <div className="space-y-6 bg-[rgba(46,255,161,0.06)] p-8 rounded-[24px] border border-accent-green/20 shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-[rgba(46,255,161,0.1)]">
                        <p className="font-inter font-extrabold text-[18px] leading-[1.6] text-primary">
                            Around 40 to 50 percent of inbound enquiries arrive outside working hours.
                        </p>

                        <p className="font-inter font-normal text-[17px] leading-[1.6] text-primary/80">
                            Even during the day, many leads get <span className="font-bold text-primary">answered too slowly</span>, followed up inconsistently, or passed to sales before they are properly <span className="font-bold text-primary">qualified</span>.
                        </p>
                    </div>

                    <div className="space-y-6 bg-[rgba(46,255,161,0.06)] p-8 rounded-[24px] border border-accent-green/20 shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:bg-[rgba(46,255,161,0.1)]">
                        <p className="font-inter font-semibold text-[18px] leading-[1.6] text-primary">
                            But that isn’t our focus.
                        </p>

                        <div className="font-inter font-normal text-[17px] leading-[1.6] text-primary/80 space-y-4">
                            <p>
                                Marketing does its job.<br />
                                <span className="font-bold text-primary">Sales</span> does its job.<br />
                                Revenue <span className="font-bold text-primary">leaks</span> in between, <span className="font-bold text-primary">especially after 5pm</span> and we aren’t here to <span className="font-bold text-primary">replace your sales team</span> in the day, but after hours…
                            </p>
                            <p>
                                After5 was built to <span className="font-bold text-primary">bridge that gap</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="w-full h-px bg-primary/10 mt-4 mb-4" />
        </section>
    );
};

export default WhyWeBuilt;
