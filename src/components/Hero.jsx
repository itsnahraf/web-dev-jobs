const Hero = ({
  title = 'Become a Full Stack Developer',
  subtitle = 'Find the Developer job that fits your skill set',
}) => {
  return (
    <section className='bg-cyan-800 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-[#FFFFFF] sm:text-5xl md:text-6xl'>
            {title}
          </h1>
          <p className='my-4 text-xl text-[#F0F8FF]'>{subtitle}</p>
          <a
            href="/jobs"
            className='mt-8 inline-block bg-[#34495E] text-white px-8 py-3 text-lg font-medium rounded-md hover:bg-[#000000] hover:text-white transition-colors duration-300'
          >
            Browse Jobs
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;

