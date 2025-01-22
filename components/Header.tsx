import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function Component() {
	return (
		<div className="container mx-auto px-4 md:px-6 lg:px-8">
			<header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
				<Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
					<span>DogInder</span>
				</Link>
				<div className="ml-auto flex gap-2">
					<Link href="/liked" prefetch={false}>
						<Heart className="w-8 h-8 text-red-500 fill-red-500" />
					</Link>
				</div>
			</header>
		</div>
	);
}
