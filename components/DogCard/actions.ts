'use server';

import { DOG_LIST } from '@/lib/consts';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function loadDogImage() {
	const url = 'https://dog.ceo/api/breeds/image/random';

	const response = await fetch(url);
	if (response.ok) {
		// eslint-disable-next-line ts/no-unsafe-assignment
		const { message } = await response.json();
		return message as string;
	}
	throw new Error('Network response was not ok.');
}

export async function reload() {
	revalidatePath('/');
}

export async function addDogImageList(src: string) {
	const cookieStore = await cookies();
	const dogList = cookieStore.get(DOG_LIST);

	cookieStore.set(DOG_LIST, dogList?.value == null ? src : `${dogList.value},${src}`);
	revalidatePath('/');
}
