import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function otelTest00(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
  context.log(`Http function processed request for url "${request.url}"`);

  const name = request.query.get('name') || await request.text() || 'world';

  context.error("OHAI ERROR ERROR!")

  return { body: `Hello, ${name}!` };
};

app.http('otelTest00', {
  methods: ['GET', 'POST'],
  authLevel: 'anonymous',
  handler: otelTest00
});
