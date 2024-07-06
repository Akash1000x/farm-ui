'use server'
import { redirect } from "next/navigation"
import { generateCodeVerifier, generateState } from "arctic"
import { cookies } from "next/headers"
import { github, google } from "@/lib/auth/lucia.auth"

export const getGoogleOauthConsentUrl = async () => {
    try {
        const state = generateState()
        const codeVerifier = generateCodeVerifier()

        cookies().set('codeVerifier', codeVerifier, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        })
        cookies().set('state', state, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'
        })

        const authUrl = await google.createAuthorizationURL(state, codeVerifier, {
            scopes: ['email', 'profile']
        })
        return { success: true, url: authUrl.toString() }

    } catch (error) {
        return { success: false, error: 'Something went wrong' }
    }
}

export const getGithubOauthUrl = async () => {
    try {
        const state = generateState()
        const authUrl = await github.createAuthorizationURL(state)
        console.log(authUrl)
        cookies().set("github_oauth_state", state, {
            path: "/",
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            
        });
        return { success: true, url: authUrl.toString() }

    }catch(err) {
        return { success: false, error: 'Something went wrong' }
    
    }
}