import configVariable from "../config_variables/configVariable";
import { Client, Databases, ID, Storage, Query } from "appwrite";

class DB_Storage_Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(configVariable.appWriteURL)
      .setProject(configVariable.appWriteProjectID);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  //post CRUD

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        configVariable.appWriteDatabaseID,
        configVariable.appWriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (err) {
      console.log("Appwrite service :: createPost :: error", err);
      throw err;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        configVariable.appWriteDatabaseID,
        configVariable.appWriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (err) {
      console.log("Appwrite service :: updatePost :: error", err);
      throw err;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        configVariable.appWriteDatabaseID,
        configVariable.appWriteCollectionID,
        slug
      );

      return true;
    } catch (err) {
      console.log("Appwrite service :: deletePost :: error", err);
      throw err;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        configVariable.appWriteDatabaseID,
        configVariable.appWriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  async getPosts() {
    try {
      return await this.databases.listDocuments(
        configVariable.appWriteDatabaseID,
        configVariable.appWriteCollectionID,
        [
            Query.equal('status','active')
        ]
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }
  
  //file upload,delete and review

  async uploadFile(file){
    try {
        return await this.storage.createFile(
            configVariable.appWriteBucketID,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("Appwrite service :: uploadFile :: error", error);
        return false
    }
}

async deleteFile(fileId){
    try {
        await this.storage.deleteFile(
            configVariable.appWriteBucketID,
            fileId
        )
        return true
    } catch (error) {
        console.log("Appwrite service :: deleteFile :: error", error);
        return false
    }
}

getFilePreview(fileId){
    return this.storage.getFilePreview(
        configVariable.appWriteBucketID,
        fileId
    )
}

}

const db_storage_service = new DB_Storage_Service();

export default db_storage_service;
