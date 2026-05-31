import chromadb

client = chromadb.Client()
collection = client.create_collection("voyanta_memory")


def save_memory(user_id, text):
    collection.add(
        documents=[text],
        ids=[user_id]
    )


def get_memory(user_id):
    return collection.get(ids=[user_id])