export function OneVsFifteen() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[28px] font-extrabold leading-tight tracking-[-0.8px] text-[#f2effb] sm:text-[34px]">
          One query, not fifteen.
        </h2>
        <p className="mt-3 max-w-[700px] text-[16px] text-[#a99fc7]">
          Your agent reads the whole call tree in a single{" "}
          <code className="font-mono text-[#f2effb]">get_call_tree</code> query.
          Rebuilding the same picture by hand takes roughly fifteen
          grep-and-read steps.
        </p>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-[#ff07aa]/40 bg-[#1c1538] shadow-[0_0_60px_rgba(255,7,170,0.12)_inset]">
            <div className="flex items-center gap-2 border-b border-[#2c2353] px-4 py-3 text-[12.5px] text-[#a99fc7]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fb7185]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff07aa]" />
              <span className="ml-auto font-semibold text-[#ff07aa]">
                1 query · get_call_tree
              </span>
            </div>
            <div className="bg-[#0d0a1a] p-5 font-mono text-[12.5px] leading-[1.7] text-[#cdd8ee]">
              <div className="text-[#a78bfa]">POST /charge</div>
              <div className="ml-3">PaymentController#charge</div>
              <div className="ml-6 text-[#a99fc7]">ChargeService#authorize</div>
              <div className="ml-9 text-[#a99fc7]">RetryPolicy#wrap</div>
              <div className="ml-12 text-[#ff07aa]">LedgerService#write</div>
              <div className="ml-[60px] text-[#a78bfa]">SQL INSERT INTO ledger ...</div>
              <div className="ml-6 text-[#a99fc7]">IdempotencyStore#check</div>
              <div className="ml-9 text-[#a78bfa]">SQL SELECT id FROM idempotency ...</div>
              <div className="ml-3 text-[#a99fc7]">→ 200 OK · 142ms</div>
              <div className="mt-3 text-[#a78bfa]">// returned by 1 get_call_tree call</div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-[#2c2353] bg-[#1c1538]">
            <div className="flex items-center gap-2 border-b border-[#2c2353] px-4 py-3 text-[12.5px] text-[#a99fc7]">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fb7185]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ff07aa]" />
              <span className="ml-auto font-semibold text-[#fb7185]">
                ~15 searches · static trajectory
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-[1.7] text-[#cdd8ee]">
{`# the agent gropes for the same picture
grep -r "payment" src/        # 214 hits
read PaymentController.java
grep -r "retry" src/          # 38 hits
read RetryHandler.java
grep -rn "charge(" src/
read ChargeService.java
grep -r "idempotency" src/    # 0 hits
read LedgerService.java
grep -rn "INSERT" src/
read LedgerRepository.java
grep -r "@Transactional" src/
read RetryPolicy.java
grep -rn "ledger.write" src/
`}
              <span className="font-bold text-[#fb7185]">
                ... budget exhausted. still guessing.
              </span>
            </pre>
          </div>
        </div>

        <p className="mt-4 text-center text-[13px] text-[#a99fc7]">
          Left, one get_call_tree query returns the whole path. Right, the same
          answer hunted across fifteen static steps, often out of budget before
          it lands.
        </p>
      </div>
    </section>
  );
}