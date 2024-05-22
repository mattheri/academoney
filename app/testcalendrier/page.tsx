
import Link from "next/link";

const TestCalendrier = () => {
    return(
        <div>
            <div className="p-4">
                <p>Homepage</p>
                <Link href="?modal=true">
                    <button type="button" className="bg-blue-500 text-white p-2">Open Modal</button>
                </Link>
            </div>
        </div>
    )
}

export default TestCalendrier;