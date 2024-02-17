function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    let album: Record<string, any> = {
        "artist": artist,
        "title": title
    };

    // Add the number of tracks to the album object if provided
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }

    return album;
}

// Make three dictionaries representing different albums
let album1 = make_album("Artist 1", "Album 1");
let album2 = make_album("Artist 2", "Album 2", 12); // Album 2 has 12 tracks
let album3 = make_album("Artist 3", "Album 3");

// Print each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
