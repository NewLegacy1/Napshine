"use client";

import { useActionState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import {
  submitQuote,
  type QuoteFormState,
} from "@/app/actions/submit-quote";
import { siteConfig, serviceTypeLabels, type ServiceType } from "@/config/site";
import { Button } from "@/components/ui/button";

const initialState: QuoteFormState = {
  success: false,
  message: "",
};

const serviceOptions = Object.entries(serviceTypeLabels) as [ServiceType, string][];

export function QuoteFormSection() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service");
  const [state, formAction, pending] = useActionState(submitQuote, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  const defaultService =
    serviceParam && serviceParam in serviceTypeLabels
      ? serviceParam
      : "residential";

  return (
    <section id="quote" className="scroll-mt-20 section-base py-16 sm:py-24">
      <div className="mx-auto max-w-xl px-4 sm:px-6">
        <div className="text-center">
          <div className="accent-bar mx-auto" />
          <h2 className="text-3xl font-bold text-heading">
            Get Your Free Quote in Minutes
          </h2>
          <p className="mt-4 text-body">
            Tell us about your space and we&apos;ll respond quickly with options
            and pricing. No obligation.
          </p>
        </div>

        <form
          ref={formRef}
          action={formAction}
          className="mt-10 space-y-5 rounded-3xl card-themed border p-6 shadow-lg shadow-brand-900/5 sm:p-8"
        >
          {state.message && (
            <div
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                state.success
                  ? "bg-accent-100 text-brand-900 border border-accent-300"
                  : "bg-red-100 text-red-800"
              }`}
              role="status"
            >
              {state.message}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-body">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              required
              className="input-field mt-1 w-full rounded-xl px-4 py-3"
            />
            {state.errors?.name && (
              <p className="mt-1 text-sm text-red-600">{state.errors.name[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-body">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="input-field mt-1 w-full rounded-xl px-4 py-3"
            />
            {state.errors?.phone && (
              <p className="mt-1 text-sm text-red-600">{state.errors.phone[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-body">
              Email (optional)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="input-field mt-1 w-full rounded-xl px-4 py-3"
            />
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-body">
              Service Type *
            </label>
            <select
              id="serviceType"
              name="serviceType"
              defaultValue={defaultService}
              required
              className="input-field mt-1 w-full rounded-xl px-4 py-3"
            >
              {serviceOptions.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-medium text-body">
              Property Details (optional)
            </label>
            <textarea
              id="details"
              name="details"
              rows={3}
              placeholder="e.g. 2-bed condo in Mississauga, move-out May 15"
              className="input-field mt-1 w-full rounded-xl px-4 py-3"
            />
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-body">
              Preferred Contact Method *
            </legend>
            <div className="mt-2 flex flex-wrap gap-4">
              {(["call", "text", "email"] as const).map((method) => (
                <label key={method} className="flex items-center gap-2 text-sm capitalize">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    defaultChecked={method === "call"}
                    required
                    className="text-brand-600 focus:ring-brand-500"
                  />
                  {method}
                </label>
              ))}
            </div>
          </fieldset>

          <Button type="submit" className="w-full" size="lg" disabled={pending}>
            {pending ? "Sending..." : "Get My Free Quote"}
          </Button>

          <ul className="space-y-1 text-center text-xs text-muted">
            <li>We respond within {siteConfig.responseTime}</li>
            <li>No spam. Your info stays private.</li>
            <li>Fully insured · Satisfaction guaranteed</li>
          </ul>
        </form>
      </div>
    </section>
  );
}
