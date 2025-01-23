import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { DOG_LIST } from '@/lib/consts';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { Suspense } from 'react';

async function deleteDogImageList(form: FormData) {
	'use server';
	const url = form.get('url') as string;
	const cookieStore = await cookies();
	const dogList = cookieStore.get(DOG_LIST);
	const dogListUrls = dogList?.value.split(',') ?? [];
	const newDogListUrls = dogListUrls.filter(dogUrl => dogUrl !== url);

	cookieStore.set(DOG_LIST, newDogListUrls.join(','));
	revalidatePath('/liked');
}

function LikedDogCard({ url }: { url: string }) {
	return (
		<Card>
			<CardHeader key={url}>
				<Image src={url} alt="A cute dog" width={400} height={400} />
			</CardHeader>
			<CardContent>
				<form action={deleteDogImageList}>
					<input type="hidden" name="url" value={url} />
					<div className="flex justify-center">
						<Button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">Delete</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}

export default async function LikePage() {
	const cookieStore = await cookies();
	const dogList = cookieStore.get(DOG_LIST);
	const dogListUrls = Array.from(new Set(dogList?.value.split(',') ?? []));

	return (
		<div className="container mx-auto px-4 md:px-6 lg:px-8">
			<h1 className="text-2xl font-bold mt-8">Liked Dogs</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
				{dogListUrls.length > 0
					? dogListUrls.map(url => (
							<Suspense key={url} fallback={<div>Loading...</div>}>
								<LikedDogCard url={url} />
							</Suspense>
						))
					: <div>No liked dogs</div>}
			</div>
		</div>
	);
}
