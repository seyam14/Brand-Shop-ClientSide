

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Contact with Us</h2>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-gray-700">
                We are here to help. If you have any questions, suggestions, or feedback, please do not hesitate to contact us.
              </p>
            </div>
            <div className="md:w-1/2 p-4">
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-700">
                <strong>Email:</strong> ETechEnclave@gmail.com<br />
                <strong>Phone:</strong> (+880)17********<br />
                <strong>Address:</strong> Uttara, Dhaka, Bangladesh.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold ml-3 mb-2">Send Us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 ml-3 ">Name</label>
                  <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded ml-3 " />
                </div>
                <div className="gap-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-gray-700 ml-3">Message</label>
                <textarea id="message" name="message" rows="4" className="w-3/4 ml-3 p-2 border border-gray-300 rounded"></textarea>
              </div>
              <div className="mt-4">
                <button type="submit" className="bg-blue-500 text-white ml-3 py-2 px-4 rounded hover:bg-blue-600">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  };
export default Contact;