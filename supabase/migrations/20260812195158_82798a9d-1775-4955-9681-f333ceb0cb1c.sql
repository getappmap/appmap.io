CREATE TABLE public.paper_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.paper_requests TO anon;
GRANT INSERT ON public.paper_requests TO authenticated;
GRANT ALL ON public.paper_requests TO service_role;

ALTER TABLE public.paper_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a paper request"
ON public.paper_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email ~* '^[A-Za-z0-9._%%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND length(email) <= 255
  AND (name IS NULL OR length(name) <= 120)
  AND (company IS NULL OR length(company) <= 160)
);