const request = async (url: string, method = "GET", body?: any) => {
  const req = new Request(url, {
    method,
    body,
  });

  try {
    const response = await fetch(req);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (e) {
    console.error(e);
  }
};

class Api {
  baseUrl = "https://tame-erin-pike-toga.cyclic.app";

  getMovies() {
    return request(`${this.baseUrl}/movies`);
  }
}

export default new Api();
