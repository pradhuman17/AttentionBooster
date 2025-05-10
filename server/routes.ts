import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactSchema } from "@shared/schema";
import { z } from "zod";
import { db } from "@db";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      // Store the contact form submission in MongoDB
      await db.collection('contacts').insertOne({
        ...validatedData,
        createdAt: new Date()
      });
      return res.status(201).json({ 
        message: "Contact form submitted successfully",
        data: validatedData
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error('Error handling contact form:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
