// pages/about.tsx

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
            <main className="flex flex-col items-center justify-center flex-1 w-full px-4 text-center">
                <h1 className="text-4xl font-bold mb-6">About Our System</h1>
                <div className="prose prose-lg mx-auto text-left">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Welcome to Our Table Reservation and Dish Management System</h2>
                        <p>
                            Our system is designed to streamline the process of reserving tables and managing dishes in your restaurant. We aim to provide an intuitive and efficient platform that enhances the dining experience for both customers and staff.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Our Goals</h2>
                        <p>
                            Our primary goals are to:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Facilitate easy and efficient table reservations</li>
                            <li>Provide a comprehensive tool for managing dishes</li>
                            <li>Ensure a smooth and enjoyable experience for customers</li>
                            <li>Enhance the operational efficiency of your restaurant</li>
                        </ul>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Features of Our System</h2>
                        <p>Our table reservation and dish management system offers a wide range of features, including:</p>
                        <ul className="list-disc list-inside">
                            <li>Table Management - View, add, edit, and delete tables with details such as number, capacity, and tags.</li>
                            <li>Dish Management - Manage your menu with options to add, edit, and delete dishes, complete with descriptions, prices and images.</li>
                            <li>Authentication - Secure registration and login for staff to ensure data privacy and security.</li>
                        </ul>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Our Development Team</h2>
                        <p>
                            Our system was developed by a dedicated team of professionals who are passionate about creating high-quality software solutions. Our team:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Azamat Bayramov</li>
                            <li>Maria Chugaeva</li>
                            <li>Liubov Smirnova</li>
                            <li>Olesia Grediushko</li>
                            <li>Anzhelika Akhmetova</li>
                        </ul>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p>
                            If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us. We are here to help and continuously improve our system to better serve your needs.
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default About;