// Imports Libs

// Imports Modules
import prisma from "../database/prisma";
import supabase from "../database/supabase";

const BUCKET_NAME: string = "images";

class ImageModel {
  static async create(file: Express.Multer.File, bookId: number) {
    // Upload image
    const randomNumber: number = Math.floor(Math.random() * 1000);
    const nameImage: string = `${Number(new Date())}-${randomNumber}`;
    const dataImage = await supabase.storage
      .from(BUCKET_NAME)
      .upload(nameImage, file.buffer, {
        contentType: file.mimetype,
      });

    // get url
    const url = await supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(dataImage.data!.path);

    // create image on database
    const data = await prisma.image.create({
      data: {
        storageName: dataImage.data!.path,
        url: url.data.publicUrl,
        bookId,
      },
    });
    return data;
  }
}

export default ImageModel;
