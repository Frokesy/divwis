const idb = window.indexedDB;

export const getAllData = async () => {
  return new Promise((resolve, reject) => {
    const dbPromise = idb.open("divwis", 1);
    dbPromise.onsuccess = () => {
      const db = dbPromise.result;

      const tx = db.transaction("favorites", "readonly");
      const favorites = tx.objectStore("favorites");
      const dataRequest = favorites.getAll();

      dataRequest.onsuccess = () => {
        const data = dataRequest.result;
        resolve(data);
      };

      dataRequest.onerror = () => {
        reject(dataRequest.error);
      };

      tx.oncomplete = () => {
        db.close();
      };
    };

    dbPromise.onerror = () => {
      reject(dbPromise.error);
    };
  });
};

export const data = await getAllData()

console.log(data, "data")
